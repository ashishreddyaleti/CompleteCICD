pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Hello Build'
      }
    }

    stage('Test') {
      steps {
        echo 'Hello Test'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploy'
      }
    }

  }
  environment {
    image = 'docker'
  }
}