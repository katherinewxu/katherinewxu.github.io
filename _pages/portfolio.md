---
layout: single
title: "Portfolio"
permalink: /portfolio/
author_profile: true
classes: [ "wide" ]
css: "/assets/css/custom.css"
---
<style>
/* Forcefully disable all hover effects on the avatar */
.sidebar .author__avatar a,
.sidebar .author__avatar a:visited,
.sidebar .author__avatar a:hover,
.sidebar .author__avatar a:focus,
.sidebar .author__avatar a:active,
.sidebar .author__avatar a::before,
.sidebar .author__avatar a::after,
.sidebar .author__avatar img,
.sidebar .author__avatar a img,
.sidebar .author__avatar a:hover img,
.sidebar .author__avatar a:focus img,
.sidebar .author__avatar a:active img,
.sidebar .author__avatar img:hover,
.sidebar .author__avatar img:focus,
.sidebar .author__avatar img:active {
  filter: none !important;
  opacity: 1 !important;
  background: transparent !important;
  box-shadow: none !important;
  transition: none !important;
}
</style>

<p>
  More on my personal background: I was born in Utah but grew up in Ohio. I will also be studying abroad at the University of Oxford in Winter 2026, where I’ll be immersing myself in British life and participating in a yet-to-be-determined tutorial. I enjoy learning guzheng, hiking, fiction, and trying new cuisines. 
</p>

<p>Inspired by my interdisciplinary coursework, I am drawn to research leveraging AI for positive change in the world. I aim to better understand technologies and how we interact with them to create AI systems that can support people through healthcare, policy, and overall in meaningful, human-centered ways.</p>

<p>Below is a collection of works that summarize my academic interests.</p>

<h2>Computational Projects</h2>

<!-- Project 1 -->
<div style="margin-bottom: 40px; display: flex; align-items: flex-start;">
  <!-- Text container -->
  <div style="flex: 1; padding-right: 20px;">
    <span style="color:#52ADC8"><b>🔍 Robust Brand Logo Detection Under Adversarial Conditions</b></span> [<a href="/files/CS131_Final_project (3).pdf" target="_blank">paper</a>]<br>
    <sub>
      <i>Final report for Stanford's CS 131: Computer Vision: Foundations and Applications (Winter 2025)</i><br>
      Developed a custom CNN and adversarial training pipeline to detect Coca-Cola logos in real-world waste images under noise, blur, and occlusion, comparing performance against YOLOv8 and achieving a +13% accuracy improvement with synthetic distortions and data augmentations.
    </sub><br>
    <sub style="font-size:11px">
      Topics: Computer Vision, Adversarial Robustness, CNNs, Object Detection, Data Augmentation
    </sub>
  </div>
  <!-- Image container -->
  <div style="flex: 0 0 300px;">
    <img src="/files/Screenshot 2025-03-29 at 12.56.09 PM.png" alt="Robust Brand Logo Detection" style="width: 200px; height: 200px; object-fit: contain; background-color: #fff;">
  </div>
</div>

<!-- Project 2 -->
<div style="margin-bottom: 40px; display: flex; align-items: flex-start;">
  <!-- Text container -->
  <div style="flex: 1; padding-right: 20px;">
    <span style="color:#52ADC8"><b>💻 Heap Allocator</b></span> [code available upon request]<br>
    <sub>
      <i>Final project for Stanford's CS 107: Computer Systems and Organization (Winter 2025)</i><br>
      Built an implicit and explicit heap allocator from scratch in C, implementing malloc, free, and realloc with performance and memory utilization tradeoffs. Developed a custom validation suite, debugging tools, and internal consistency checks (validate_heap, dump_heap) to test correctness under real-world allocation traces.
    </sub><br>
    <sub style="font-size:11px">
      Topics: Systems Programming, Memory Management, C Programming, Performance Optimization, Debugging Tools
    </sub>
  </div>
  <!-- Image container -->
  <div style="flex: 0 0 300px;">
    <img src="/files/Screenshot 2025-03-29 at 1.12.36 PM.png" alt="Heap Allocator" style="width: 200px; height: 200px; object-fit: contain; background-color: #fff;">
  </div>
</div>

<!-- Project 3 -->
<div style="margin-bottom: 40px; display: flex; align-items: flex-start;">
  <!-- Text container -->
  <div style="flex: 1; padding-right: 20px;">
    <span style="color:#52ADC8"><b>🎶 What’s in the noise? Advancing Musical Genre Classification using Neural Networks</b></span> [<a href="/files/CS 129 Final Writeup (2).pdf" target="_blank">paper</a>] [<a href="https://github.com/katherinewxu/129Final" target="_blank">code</a>]<br>
    <sub>
      <i>Final report and poster for Stanford's CS 129: Applied Machine Learning (Winter 2024)</i><br>
      Trained and evaluated VGG-based neural networks on mel spectrograms from the GTZAN dataset to classify music genres, experimenting with LSTM, GRU, and CNN architectures, and boosting performance with audio data augmentation (noise, pitch-shift, time-stretch).
    </sub><br>
    <sub style="font-size:11px">
      Topics: Audio Classification, Deep Learning, Convolutional Neural Networks, Music Information Retrieval, Data Augmentation
    </sub>
  </div>
  <!-- Image container -->
  <div style="flex: 0 0 300px;">
    <img src="/files/Screenshot 2025-03-29 at 1.05.04 PM.png" alt="Musical Genre Classification" style="width: 200px; height: 200px; object-fit: contain; background-color: #fff;">
  </div>
</div>

<!-- Project 4 -->
<div style="margin-bottom: 40px; display: flex; align-items: flex-start;">
  <!-- Text container -->
  <div style="flex: 1; padding-right: 20px;">
    <span style="color:#52ADC8"><b>🛡️ Protecting Against Propaganda: Leveraging Artificial Intelligence for Enhanced Misinformation Identification and Critical Thinking</b></span> [<a href="/files/CS197___Final_Draft (2).pdf" target="_blank">paper</a>]<br>
    <sub>
      <i>Final report and poster for Stanford's CS 197: Computer Science Research (Winter 2024)</i><br>
      Designed a browser extension powered by GPT-4 to detect persuasive fallacies in political news articles, providing users with real-time annotations and an “extremeness” score to enhance critical thinking. Conducted a pilot user study with randomized control groups to evaluate impact on media trust, intellectual humility, and misinformation resilience.
    </sub><br>
    <sub style="font-size:11px">
      Topics: Human-AI Interaction, Misinformation Detection, Language Models, Political Psychology, Media Literacy
    </sub>
  </div>
  <!-- Image container -->
  <div style="flex: 0 0 300px;">
    <img src="/files/Screenshot 2025-03-29 at 1.05.19 PM.png" alt="Protecting Against Propaganda" style="width: 200px; height: 200px; object-fit: contain; background-color: #fff;">
  </div>
</div>

<h2>Teaching</h2>
<div style="margin-bottom: 40px; display: flex; align-items: flex-start;">
  <!-- Text container -->
  <div style="flex: 1; padding-right: 20px;">
    <span style="color:#52ADC8"><b>Fall 2025: CS106A Programming Methodologies</b></span> <br>
    <sub>
      <i>Taught by Prof. Mehran Sahami / Prof. Chris Gregg</i><br>
    </sub>
    <sub style="font-size:11px">
      Topics: Python, Programming Concepts
    </sub>
  </div>
</div>

<div style="margin-bottom: 40px; display: flex; align-items: flex-start;">
  <!-- Text container -->
  <div style="flex: 1; padding-right: 20px;">
    <span style="color:#52ADC8"><b>Spring 2025: CS106A through Stanford Code in Place</b></span> <br>
    <sub>
      <i>Taught by Prof. Chris Piech</i><br>
    </sub>
    <sub style="font-size:11px">
      Topics: Python, Programming Concepts
    </sub>
  </div>
</div>

<h2>Volunteering</h2>
<ul>
  <li>Stanford Women in Computer Science 2025 — Director of Outreach</li>
  <li>ASES Launchpad 2025 — Organizer</li>
  <li>Listen to the Silence 2024 — Workshops Co-Chair</li>
  <li>Black LaiR — CS106A/106B Course Helper</li>
  <li>Stanford Women in Computer Science 2024 — Outreach Intern</li>
</ul>