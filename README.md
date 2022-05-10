# nodejs-robot-control
This project uses NodeJS to control a robot that uses the CamJam EduKit 3 motor controller

## Introduction

This is a project that uses keystrokes to control a Raspberry Pi robot using pigpio with NodeJS and uses the CamJam EduKit 3 motor controller. However, this can be applied to any motor controller with slight adjustments.

## Getting Started

First [NodeJS](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) need to be installed. Be sure to follow your specific OS instructions whether they are Windows, Mac or Linux. This project can also be run directly on the Pi. Then, you need to install pigpio on the Pi if necessary with `sudo apt install pigpio`. Then install the pigpio-client with `npm install pigpio-client`. Then run the code with `node robot.js`. Then press the cursor keys to move the robot and the return or Enter key to stop the robot. Exit with CTRL+C.
