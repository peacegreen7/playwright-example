const { exec } = require('child_process');

const service = process.env.SERVICE || 'demo';
const configFilePath = `configs/cucumber-${service}.js`;

const runCucumber = async () => {
  try {
    const command = `npx cucumber-js test --config ${configFilePath}`;

    console.log('Running command:', command);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
      }
      console.log(`Stdout: ${stdout}`);
    });
  } catch (err) {
    console.error(`Failed to load configuration: ${err.message}`);
  }
};

runCucumber();
