

module.exports = {

	log_promise: (p, target) => p.then(
		() => console.log('* ' + target + ' ✓'),
		(err) => console.error('! ' + target + ' ❌\n\n!!!!!!!!\n', err)
	)

}

