pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(branch: 'madicke', url: "${BACKEND_URL}")
        git(branch: 'main', url: "${FRONTEND_URL}")
      }
    }

    stage('List all files') {
      steps {
        sh 'ls -l'
        sh 'cd odc'
      }
    }

  }
  environment {
    BACKEND_URL = 'https://github.com/madicke12/Backend.git'
    FRONTEND_URL = 'https://github.com/AWS-ODC-P4-C1/Frontend.git'
  }
}
