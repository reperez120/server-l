module.exports = {
  apps : [{
    name: 'server-l',
    script: './index.js'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-3-15-204-36.us-east-2.compute.amazonaws.com',
      key  : '~/.ssh/l.pem',
      ref  : 'origin/master',
      repo : 'https://github.com/reperez120/server-l.git',
      path : '/home/ubuntu/server-l',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
