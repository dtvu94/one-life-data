# One Life Data

## Overview

This repository was inspired by the [One Time Secret](https://github.com/onetimesecret/onetimesecret) repository. I generate a new one to satisfy extra requirements. It is not a once-only secret. Currently, a secret can be a file, among other things. I aim to initially create certain files.

You may question why I desire such capabilities. This program is a component of my security-related advancements. I administer my own AWS server. I protect my passwords with KeePass. Manually moving KeePass database files and secrets between various devices is the only concern. I construct this program and offer the repository so that you may use it without having to construct it from scratch.

This program has three milestones, in my opinion:

- The first simple version is to share a one-time file or secret. It is comparable to [One Time Secret](https://github.com/onetimesecret/onetimesecret). The software does not support protected request-response between the backend and the frontend.
- The objective of the second version is to provide security between the backend and the frontend. It would provide features intended to go in front of HTTP and Websocket services and a second encryption layer based on the [ECDH](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman) technique.
- The third edition of this program will emphasize deployment and setup. I would facilitate deployment on a laptop, K8s cluster, etc. It would consist of MacOS, Windows, Linux, Helm chart, and Docker image installs.

## Features

## Guide

### User

### Developer
