---
description: >-
  This protocol is an Decentralised Chat/Communication dApp and contains some
  application that needs to be run simultaneously.
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Setup

### Hardhat & Ngrok

1.  Install all **Hardhat Node** dependencies

    <pre class="language-sh" data-full-width="true"><code class="lang-sh"><strong>nvm install
    </strong>nvm use
    npm install
    </code></pre>
2.  Install all **Ngrok** dependencies:

    ```bash
    cd ngrok
    nvm install
    nvm use
    npm install
    ```
3.  Start the **Hardhat node** & **Ngrok** concurrently: `npm start`

    This will start an **Hardhat node** blockchain and create an **Ngrok Forward Tunne**l to expose the Blockchain RPC to the public.



