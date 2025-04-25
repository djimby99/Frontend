pipeline {
  agent any

  environment {
    BACKEND_URL = 'https://github.com/AWS-ODC-P4-C1/Backend.git'
    FRONTEND_URL = 'https://github.com/AWS-ODC-P4-C1/Frontend.git'
  }

  stages {
    stage('Checkout') {
      steps {
        dir('backend') {
          git branch: 'madicke', url: "${BACKEND_URL}"
        }
        dir('frontend') {
          git branch: 'main', url: "${FRONTEND_URL}"
        }
      }
    }

    stage('List all files') {
      steps {
        sh 'ls -l'
        sh 'cd ..' // optional, depending on what you want to do next
      }
    }
  }
}
