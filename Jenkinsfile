pipeline {
    agent any

    stages {

        stage('Dependencies') {
            steps {
                // Install dependencies, e.g., npm install for a Node.js project
                script {
                    bat 'npm install'  // Use 'bat' to run npm install on Windows
                }
            }
        }

        stage('Install Cypress Binary') {
            steps {
                // Manually install the Cypress binary if not cached
                script {
                    bat 'npx cypress install'  // Use 'bat' to install the Cypress binary on Windows
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run your tests, e.g., using Cypress for API testing
                script {
                    bat 'npx cypress run'  // Use 'bat' to run Cypress tests on Windows
                }
            }
        }
    }
}
