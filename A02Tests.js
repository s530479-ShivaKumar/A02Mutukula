
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing principle_validation function with several sets of inputs', function (assert) {
    assert.equal(principle_validation(500), "Principle amount is valid", 'Testing with positiv value of principle amount');
    assert.throws(function () { principle_validation(null); }, /Principle is  not valid/, 'Passing in null correctly raises an Error');
    assert.throws(function () { principle_validation(-100); }, /Principle is  not valid/, 'Passing in negative value correctly raises an Error');
});

QUnit.test('Testing interestRate_Validation function with several sets of inputs', function (assert) {
    assert.equal(interestRate_Validation(10), "Interest rate amount is valid", 'Testing with positiv value of Interest rate amount');
    assert.throws(function () { interestRate_Validation(null); }, /Interest rate is  not valid/, 'Passing in null correctly raises an Error');
    assert.throws(function () { interestRate_Validation(-10); }, /Interest rate is  not valid/, 'Passing in negative value correctly raises an Error');
});