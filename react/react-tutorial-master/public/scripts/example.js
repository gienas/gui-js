// tutorial1.js
var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: [], currentComment: {author: '', text: ''}};
  },

 loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleCommentSubmit: function(comment) {
	 var comments = this.state.data;
	 comment.id = Date.now();
     var newComments = comments.concat([comment]);
     this.setState({data: newComments});

     $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
		this.setState({data: comments});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleCommentEdit: function(comment) {
	  console.log("comment box, handleCommentEdit " + comment.author );
	  //this.setState({data: this.state.data, currentComment: comment});
	  this.refs['f1'].handleCommentEdit(comment);
  },

  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
		<CommentList data={this.state.data} onCommentEdit={this.handleCommentEdit} />
		<CommentForm onCommentSubmit={this.handleCommentSubmit} ref="f1" />
      </div>
    );
  }
});


// tutorial8.js
var data = [
  {id: 1, author: "Eugeniusz Hunt", text: "This is one comment"},
  {id: 2, author: "Honza Walke", text: "This is *another* comment"}
];

// tutorial2.js
var CommentList = React.createClass({

  handleCommentEdit: function(comment){
	  console.log("handleCommentEdit = " + comment.author);
	  this.props.onCommentEdit(comment);
  },

  render: function() {
	 /*
	 var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}  >
          {comment.text}
        </Comment>
      );
    });
	*/

    return (
      <div className="commentList">
	  {this.props.data.map( (comment) =>
		<Comment author={comment.author} key={comment.id} onCommentEdit={this.handleCommentEdit} >
          {comment.text}
        </Comment>
	  )}
	  </div>

	  /*
	  {commentNodes}
	  */
	  // console.log(this.props);
	  /*
	  for(int i=0; i<this.props.data.length; i++)
	  {

		 <Comment author={data[i].author} key={data[i].id}  >
         {data[i].text}
		 </Comment>

	  }
       */


    );
  }
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
   handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },

  handleCommentEdit: function(comment) {
	  this.setState({author: comment.author});
	  this.setState({text: comment.text});
  },

  render: function() {
    return (
	<form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
		<input type="submit" value="Post" />
      </form>
    );
  }
});

// tutorial4.js
var Comment = React.createClass({

 rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },

  editAuthor: function(){
	console.log("edit author " + this.props.author + " " + this.props.children);
    this.props.onCommentEdit({author: this.props.author, text: this.props.children});
  },

  render: function() {
	var md = new Remarkable();
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author} <button name="edit" onClick={this.editAuthor} >Edit</button>
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />

      </div>
    );
  }
});


ReactDOM.render(
  <CommentBox url="/api/comments" />,
  document.getElementById('content')
);
