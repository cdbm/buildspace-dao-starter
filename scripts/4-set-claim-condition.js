import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
    "0xb1F66d351c8fD8dDA9D5f717aB25052206162C46",
);

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory();

        claimConditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 50_000,
            maxQuantityPerTransaction: 1,
        });

        await bundleDrop.setClaimCondition(0, claimConditionFactory);
        console.log("✅ Sucessfully set claim condition!", bundleDrop.address);
    } catch (error) {
        console.error("Failed to set claim condition", error);
    }
})()