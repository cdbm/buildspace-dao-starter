import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
    "0x53b37d58f68c25155077c40a2042B9a31478F2DE",
);
(async () => {
    try {
        const amount = 1_000_000;
        const amountWithDecimals = ethers.utils.parseUnits(amount.toString(), 18);

        await tokenModule.mint(amountWithDecimals);
        const totalSupply = await tokenModule.totalSupply();

        console.log(
            "✅ There now is",
            ethers.utils.formatUnits(totalSupply, 18),
            "$BLINDERS in circulation",
        );
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();