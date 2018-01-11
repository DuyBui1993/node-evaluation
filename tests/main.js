after(function() {
    // a test, before(), or beforeEach() hook just failed
    setTimeout(() => {
        console.log("Test finished")
        process.exitCode = 0;
        process.exit(0);
    }, 2000);
})