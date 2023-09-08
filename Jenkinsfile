pipeline {
  agent any
  environment {
    image = "reddyashishaleti/nodejswebapp"
    dockerCredentials = "dockerCred"
    appimage = ""
  }
  stages{
    stage('Build') {
        steps {
            script {
                dockerImage = docker.build image
            }
        }
     }
    }
    stage('Build2') {
       steps {
         script {
            def appimage = docker.build image + "$BUILDNUMBER"
            docker.WithRegistry('https://registry.hub.docker.com', 'Dockerhub') {
                appimage.push()
                //appimage.push('latest')
            }
        }
      }             
    }
    stage('Deploy'){
        steps {
            script {
                kubectl apply -f Deployment.yaml
                kubectl apply -f Service.yaml
            }
        }
    }




}