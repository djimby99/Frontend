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
        docker tag backend djimby/backend:latest
        docker tag frontend djimby/frontend:latest
        docker push djimby/backend:latest
        docker push djimby/frontend:latest
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
