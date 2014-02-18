/**
* plugin.js - First Line Plugin
*
* Author: Jason Kim inspired by Shengying Pan
*/

tinymce.PluginManager.add('firstlineindent', function(editor, url) {

    editor.addCommand('tinymceFirstLineIndent', function () {

    	var indentValue = '4%';

        tinymce.each(editor.selection.getSelectedBlocks(), function (element) {

            if (element.nodeName == 'P') {

                var value = editor.dom.getStyle(element, 'text-indent');

                if (value != indentValue) {

					editor.dom.setStyle(element, 'text-indent', indentValue);

                } else {
	            	
	            	editor.dom.setStyle(element, 'text-indent', '');
                }
            }
        });
    });

	editor.addButton('firstlineindent', {

		icon: 'indent',

		tooltip: 'First Line Indent',

		onclick: function() {

			tinymce.execCommand('tinymceFirstLineIndent', false);
        }
		
	});

	editor.addMenuItem('firstlineindent', {
		
		icon: 'indent',

		text: 'First Line Indent',

		onclick: function() {

			tinymce.execCommand('tinymceFirstLineIndent', false);
        },

		context: 'format'
	});	
});