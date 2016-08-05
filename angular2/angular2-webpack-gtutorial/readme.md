Preparation:
- Run npm install typescript. If TypeScript is installed globally, try using `npm link typescript`.
- Run npm install

\src\main\webapp\

	npm i
	(typescript should be installed globaly and linked)
		
build maven project 
	mvn clean install
	
Frontend development:

1. Wildfly + Atom editor

Deploy war in exploded mode to Wildfly:
a) unpack angular2-web.war to directory $WILDFY_HOME/standalone/deployment/angular2-web.war
b) create file angular2-web.war.dodeploy with content "angular2-web.war" (without quote mark)


d) Atom editor
- install Atom editor https://atom.io/
- install type script plugin:
 			apm install atom-typescript
- open project in atom editor point directory ura-web-react\src\main\webapp

c) change webpack configuration in webpack.prod.js- deploy direct do wildfly
e.g 

	filename: 'C:/wildfly/standalone/deployments/angular2-web.war/dist/[name].js',
    chunkFilename: 'C:/wildfly/standalone/deployments/angular2-web.war/dist/[id].chunk.js'
	...
	new ExtractTextPlugin('C:/wildfly/standalone/deployments/angular2-web.war.war/dist/[name].css'),

d) run webpack in watch mode in directory ura-web-react\src\main\webapp:

		npm run build

run wildfly

After changes in type script files, changes should be automatically visible in browser http://localhost:8080/angular2-web/
