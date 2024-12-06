pipeline {
    agent any

    stages {

        stage('Dependencies') {
            steps {
                // Install dependencies, e.g., npm install for a Node.js project
                script {
                    bat 'npm install'  // for Windows
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run your tests, e.g., using Cypress for API testing
                script {
                    sh 'npx cypress run'  // Run Cypress tests
                }
            }
        }
    }
}