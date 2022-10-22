# Sans Tracas


<p align="center"> 
<a href="https://github.com/Ronit-Desai/Sans-Tracas/blob/main/LICENSE.md" target="_blank">
<img src="https://img.shields.io/badge/License-MIT-brightgreen.svg" alt="MIT license" />
</a>

<a>
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
</a>
</p>






`Sans Tracas` is an interactive cross-platform tool that enables users to run EEG experiments online from the comfort of their homes instead of going to the laboratory. You don't need to be an EEG expert to use the platform. It is designed in such a way that even a user with no knowledge about EEG and BCI can use this platform and perform online EEG experiments all on their own by just following the tutoriol videos and instructions provided on the platform. Users can also view their real-time live EEG signal and understand more about EEG using the platform.

`Sans Tracas` is also designed for neuroscience researchers, as it allows neuroscience researchers to add their own experiments to the ever growing Sans Tracas library. Behavioural neuroscientists can now add an EEG component to their research by integrating their own behavioural experiments with the platform and start recording EEG data in the background. The behavioural experiments can either be self-designed or designed using tools such as [PsychoPy](https://www.psychopy.org/), [PsychoJS](https://github.com/psychopy/psychojs), [JSPsych](https://www.jspsych.org/7.3/), and [Pavlovia](https://pavlovia.org/). The integreation process is so simple and straightforward that even a researcher with little to no programming knowledge can integrate their experiments with the platform by just following the documentation.

`Sans Tracas` is designed using HCI design paradigms and via an iterative user-centric design approach with React.

`Sans Tracas` is available for free at [Sans Tracas](https://polite-mud-086cd3610.1.azurestaticapps.net/). This platform is served from the software in this repository. So, all you need to do to try the platform out is grab a Muse EEG headset and head to [Sans Tracas](https://polite-mud-086cd3610.1.azurestaticapps.net/).

For neuroscience researchers looking to integrate their own experiments, the integration process is available at [Sans Tracas Documentation](https://polite-mud-086cd3610.1.azurestaticapps.net/documentation). So, all you need to do to try it out is, get your experiment ready and head out to the [Sans Tracas Documentation](https://polite-mud-086cd3610.1.azurestaticapps.net/documentation).

Currently, there are only two options for running EEG studies remotely: [EEG-notebooks](https://github.com/NeuroTechX/eeg-notebooks) and [MYND](https://github.com/MPI-IS/MYND). Both platforms are still in their initial stages of development, and both are limited in some critical aspects. MYND is limited to smartphones and does not allow researchers to build/integrate their own experiments with the platform. Moreover, the screen size of a smartphone is not ideal for research involving visual stimuli, and such research generally uses stimuli that cover larger portions of the participant’s field of view. Even though [EEG-notebooks](https://neurotechx.github.io/eeg-notebooks/) is highly usable for data collection and analysis with [muse-lsl](https://github.com/alexandrebarachant/muse-lsl), it is limited to only personal computers and requires high-level technical skills (programming skills) from the researcher and the participant for its installation alone. Its installation process is very complex and requires expert technical skills and programming knowledge to set up and run an EEG experiment. These software support the Interaxon MUSE headset but require a bluetooth low-energey (BLE) dongle to work with common operating systems (e.g. Windows or Mac OSX). These tools also require the editing of `pyglatt` code to connect to Muse headsets. Thus, previous softwares are cumbersome and serve as a barrier to entry for EEG beginners. In contrast, `Sans Tracas` is cross-platform and its design if focused on the ease of use of both researchers and participants. Researchers will be able to integrate their own experiments into the platform without prior technical knowledge to collect data from diverse participants. Participants or end-users will be able to take part in EEG experiments independently using a simplistic and intuitive interface.

`Sans Tracas` has also been inspired by [EEGEdu](https://github.com/kylemath/EEGEdu), which is an interactive educational website to learn/teach about working with electroencephalogram (EEG) data. It is a teaching tool that allows for students to interact with their own brain waves. However, despite being somewhat capable of running online EEG experiment, in its current form it is neither ready to be used for conducting large-scale EEG studies, not does it allow for researchers to add/integrate their own experiments with the platform. However, it is an exceptional tool for anyone to get started with EEG and learn about it in an interactive manner.

`Sans Tracas` aims to democratize EEG and BCI research by enabling and encouraging more participants and researchers to participate in and play with Electroencephalography (EEG) research.


# Contributing to Sans Tracas

If you are interested in developing Sans Tracas, you can directly create a Pull Request or email me at: [Ronit Desai](mailto:ronitdesai97@gmail.com)

# Deployment

[Sans Tracas](https://polite-mud-086cd3610.1.azurestaticapps.net/) is hosted on [Microsoft Azure](https://azure.microsoft.com/en-ca/). Its CI/CD deployment occurs automagically using GitHub post-commit hooks, or [Actions](https://github.com/Ronit-Desai/Sans-Tracas/actions), as they are commonly called. You can see how the application is build and deployed by [inspecting the workflow](https://github.com/Ronit-Desai/Sans-Tracas/blob/main/.github/workflows/azure-static-web-apps-polite-mud-086cd3610.yml). 

# References and Related Tools

* [Muse 2016 EEG Headset JavaScript Library (using Web Bluetooth)](https://github.com/urish/muse-js)
* [React, A JavaScript library for building user interfaces](https://reactjs.org/)
* [Simple yet flexible JavaScript charting for designers & developers](https://www.chartjs.org/docs/latest/)
* [Muse 2016 EEG Headset LSL (NodeJS)](https://github.com/urish/muse-lsl)
* [Get started with learning about BCI](http://learn.neurotechedu.com/lessons/)

# Scientific Publications using Sans Tracas
1. Ronit Desai, Rita Orji, Eugenie Roudaia, and Allison B. Sekuler. 2022. Sans Tracas: A Cross-platform Tool for Online EEG Experiments. In Companion of the 2022 ACM SIGCHI Symposium on Engineering Interactive Computing Systems (EICS '22 Companion). Association for Computing Machinery, New York, NY, USA, 37–43. https://doi.org/10.1145/3531706.3536461

# Credits

`Sans Tracas` - An Interactive Cross-Platform tool for running online EEG experiments with the Interaxon Muse brought to you by Ronit Umeshbhai Desai. A [Ronit Desai](https://www.linkedin.com/in/ronitdesai/) Production.

# License

[Sans Tracas is licensed under The MIT License (MIT)](https://github.com/Ronit-Desai/Sans-Tracas/blob/main/LICENSE.md)
