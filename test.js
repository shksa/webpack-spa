const promise = new Promise((resolve, reject) => {throw new Error('world')} ).then(console.log).catch(console.error)

