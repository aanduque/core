---
title: ☀️ Daily Note w/ Prompts & Events
type: empty-note
documentation: https://help.noteplan.co/article/136-templates
---
*Mood: <%- prompt('What's your mood today?',['🙂','😐','😕']) %>*

## Primary Focus
* <%- prompt('Most important task today?') %>

## Tasks
* 

<%- listTodaysEvents({template:"- *|START|*-*|END|*: *|TITLE|*",allday_template:"- *|TITLE|*"}) %>
