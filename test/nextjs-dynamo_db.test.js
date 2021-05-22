const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const NextjsDynamoDb = require('../lib/nextjs-dynamo_db-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new NextjsDynamoDb.NextjsDynamoDbStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
