pipeline {
  agent any
  stages {
    stage('List all files') {
      steps {
        sh 'export PATH=/usr/local/bin:$PATH && docker build -t latest .'
      }
    }

  }
  environment {
    REMOTE_HOST = 'user@your-server-ip'
    APP_DIR = '/var/www/my-app'
  }
}
