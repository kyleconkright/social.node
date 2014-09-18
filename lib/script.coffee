$ ->
    $('div.params').on 'click','a', ->
        $(@).parent().find($('a')).removeClass 'select'
        $(@).addClass 'select'
