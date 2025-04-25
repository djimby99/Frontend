pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        dir(path: 'backend') {
          git(branch: 'madicke', url: "${BACKEND_URL}")
        }

        dir(path: 'frontend') {
          git(branch: 'main', url: "${FRONTEND_URL}")
        }

      }
    }

    stage('List all files') {
      steps {
        sh 'ls -l'
        sh '''cd ..
ls -l'''
      }
    }

  }
  environment {
    BACKEND_URL = 'https://github.com/AWS-ODC-P4-C1/Backend.git'
    FRONTEND_URL = 'https://github.com/AWS-ODC-P4-C1/Frontend.git'
  }
}