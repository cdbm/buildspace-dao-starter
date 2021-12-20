import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0xcF5a0Fe3AcB2406205687f159C52A004806949B6");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "PeakyBlindersDAO Governance Token",
            symbol: "BLINDERS",
        });

        console.log(
            "✅ Successfully deployed token module, address:",
            tokenModule.address,
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();