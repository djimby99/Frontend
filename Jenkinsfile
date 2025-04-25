pipeline {
  agent any
   environment {
    BACKEND_URL = 'https://github.com/AWS-ODC-P4-C1/Backend.git'
   
  }
  stages {
    stage('Checkout') {
      steps {
        git branch: 'madicke', url: "${BACKEND_URL}"
      }
    }

    stage('List all files') {
      steps {
        sh 'ls -l'      
        }
        sh 'cd odc'
    }

  }
 
}