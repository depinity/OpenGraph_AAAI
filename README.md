
# OpenGraph <h3>Trustworthy Deep Learning Inference Framework using Blockchain</h3>

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- Yarn/npm package manager
- A Sui wallet (like Sui Wallet browser extension)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/OpenGraphLabs/opengraph-explorer.git
   cd opengraph-explorer/client
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development client:
   ```bash
   yarn dev
   ```

5. Start the development server
   ```bash
   cd opengraph-explorer
   docker-compose up -d converter
   ```

6. execute deploy.sh
   ```bash
   cd opengraph-explorer/scripts
   ./deploy.sh # deploy contracts and extract test samples dataset
   ```

7. Open your browser and navigate to `http://localhost:5173` 

8. set devnet in your wallet and upload .h5 model in browser
   ```
   1. Connect Wallet: Connect your Sui wallet to access the platform
   2. Explore Models: Browse through available on-chain models
   3. Deploy Models: Deploy your DNN models to the Sui blockchain
   4. Execute Inference: Run transparent, layer-by-layer inference with any input
   5. Verify Results: Follow each step of the execution with on-chain verification
   6. Analyze Outputs: Examine final outputs and the entire execution path
   ```
9. Set Model parameters
  ```bash
  const MODEL_ID = "0x…";
  const LAYER_COUNT = 3;
  const LAYER_DIMENSIONS = [32, 16, 10]; 
  ```

10. Run inference experiment
  ```bash
  cd opengraph-explorer/scripts
  python3 ./pkl_to_json.py mnist_test_data.pkl
  npm start

  # devnet inference tester address : 0xf1d044cc7a005d086cfc7105596154c8b60734b532eaf35efbd8bc82a3af8edc
  ```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

