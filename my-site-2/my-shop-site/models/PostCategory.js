var keystone = require('keystone');
var Types = keystone.Field.Types;

var PostCategory = new keystone.List('PostCategory', {
	autokey: {from: 'name', path: 'key', unique: true},
	label: 'Categories'
});

PostCategory.add({
	name: {type: String, required: true},
	categories: {type: Types.Relationship, ref: 'PostCategory', many: true}
});

PostCategory.relationship({ref: 'Post', refPath: 'categories'});
PostCategory.relationship({ref: 'PostCategory', refPath: 'categories'});

PostCategory.track = true;
PostCategory.register();
