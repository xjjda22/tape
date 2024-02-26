# Tape Signup Contract

| Network           | Address                                      |
| ----------------- | -------------------------------------------- |
| `Polygon Mainnet` | `0x68357D5F02a3913132577c7aC0847feade9a05aC` |
| `Polygon Mumbai`  | `0x21970AD5c43e90184A62674fAC54f4Bed030Fb74` |

Try running some of the following tasks:

### Compile
```
npx hardhat compile
```

### Deploy
```
npx hardhat run scripts/deploy.ts --network polygon 
npx hardhat verify 0xFa920e03C4096C09ae20716c249f6d3A27114984 --network polygon
hh verify 0xFa920e03C4096C09ae20716c249f6d3A27114984 --network polygon
```

```
npx hardhat run scripts/deploy.ts --network polygonMumbai 
npx hardhat verify 0xb9F635c498CdC2dBf95B3A916b007fD16c5506ED --network polygonMumbai
hh verify 0xb9F635c498CdC2dBf95B3A916b007fD16c5506ED --network polygonMumbai
```