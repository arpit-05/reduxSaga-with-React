function* rootSaga() {
    console.log('hello world')
}

export default rootSaga;


/*
 1.
 watcher_saga -> listesns to an action -> invokes the worker saga

 2. effects

 redux saga provide us some helpers(js objects)
 known as effects,
they just simply convey a specific meaning to redux-saga


by themseleves these objects are doing nothing,they are
simply returning a object and then this obejct
is passed back to the middleware,it then accordingly acts
upon them.

3. how redux saga manages promises?

redux saga pauses itself whenver they counter a promise,
until the promise completes itself.

*/