import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule("0xcF5a0Fe3AcB2406205687f159C52A004806949B6");

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            name: "PeakyBlindersDAO's Epic Proposals",
            votingTokenAddress: "0x53b37d58f68c25155077c40a2042B9a31478F2DE",
            proposalStartWaitTimeInSeconds: 0,
            proposalVotingTimeInSeconds: 24 * 60 * 60,
            votingQuorumFraction: 0,
            minimumNumberOfTokensNeededToPropose: "0"
        });

        console.log(
            "✅ Successfully deployed vote module, address:",
            voteModule.address,
        );
    } catch (err) {
        console.log("Failed to deploy vote module", err);
    }
})();