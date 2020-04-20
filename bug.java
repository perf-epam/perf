        String id = step.getValue();
        String testRunId = getTestRunId();
        if (testRunId != null)
        {
            Link testRunLink = ResultsUtils.createTmsLink(testRunId).setName("Test run ID");
            lifecycle.updateTestCase(id, result -> result.getLinks().add(testRunLink));
        }
