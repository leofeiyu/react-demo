import Mock from 'mockjs';
import $ from 'jquery';

Mock.mock('http://506.com', {
    'name': "DavidZhang",
    'age|1-100': 100,
    'color': '@color'
});

$.ajax({
	url: 'http://506.com'
}).done(function(data, status, xhr) {
	console.log(JSON.stringify(data))
})
