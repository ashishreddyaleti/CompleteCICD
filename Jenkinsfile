pipeline{
    agent any
    environment {
        dockerImagename = "reddyashishaleti/myimage"
        appimage = ""
    }
    stages{
        stage('Build Image'){
            steps{
                script {
                    dockerImage = docker.build dockerImagename
                }
                
            }
        }
        stage('PUSH IMAGE'){
            environment {
                dockerCredentilals = 'dockerCred'
            }
            steps{
                script {
                    def appimage = docker.build dockerImagename + "$BUILD_NUMBER"
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerCred') {
                        appimage.push()
                        //appimage.push('latest')
                        
                    }
                }

            }
        }
        stage('Deploy'){
            when {
                branch 'main'
            }
            steps{
                script{
                    sh kubectl apply -f deployment.yaml
                }
            }
        }
        

    }
}
