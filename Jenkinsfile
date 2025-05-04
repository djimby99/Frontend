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
         sh '''
        cd backend/odc
        docker compose  build
        docker tag backend madicke12/backend:latest
        docker tag frontend madicke12/frontend:latest
        docker push madicke12/backend:latest
        docker push madicke12/frontend:latest
        '''
      }
    }

  }
  environment {
    BACKEND_URL = 'https://github.com/AWS-ODC-P4-C1/Backend.git'
    FRONTEND_URL = 'https://github.com/AWS-ODC-P4-C1/Frontend.git'
    PATH = "C:\\Program Files\\Docker\\Docker\\resources\\bin;${env.PATH}"
  }
}
