pipeline {
    agent any

    environment {
        REMOTE_HOST = 'user@your-server-ip'
        APP_DIR = '/var/www/my-app'
    }

    stages {
        // stage('Clone Repo') {
        //     steps {
        //         git 'https://github.com/your-repo.git'
        //     }
        // }

        stage('List all files') {
            steps {
                sh 'ls -la'
            }
        }

    //     stage('Run Tests') {
    //         steps {
    //             sh 'npm test'
    //         }
    //     }

    //     stage('Build') {
    //         steps {
    //             sh 'npm run build'
    //         }
    //     }

    //     stage('Deploy') {
    //         steps {
    //             sshagent(['your-ssh-credential-id']) {
    //                 sh """
    //                     ssh -o StrictHostKeyChecking=no $REMOTE_HOST '
    //                     cd $APP_DIR &&
    //                     git pull &&
    //                     npm install &&
    //                     pm2 restart app
    //                     '
    //                 """
    //             }
    //         }
    //     }
    // }
    }
}
