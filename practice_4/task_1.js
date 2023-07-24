function testThrow(errorParam) {
    try {
      throw errorParam;
    } catch (error) {
      console.log('Caught:', error);
    }
}

testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));
