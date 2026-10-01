# Waiting words

The words a breathing button shows while the site is working. Jessie approved all thirty on
2026-09-30: *"all looks great"*.

## How they appear

1. A breathing button first shows its own line, such as "Loading your groups" or "Looking up this
   group", for **3 seconds**.
2. If the page is still waiting, the button changes to one of these words, with "…" after it.
3. It changes to another word every **7 seconds**, in a shuffled order, without repeating until
   all thirty have been shown. Jessie, 2026-09-30: *"it's WAY to qiuck. make it every 7 seconds"*.
4. If the page writes its own message into the button, such as "Could not load", the words stop
   and never cover that message.

They are on every page with a breathing button on 2gather.network and creating.works.

## The words

| group | words |
|---|---|
| Welcoming, like a host | Putting the kettle on · Setting the table · Pulling up a chair · Making room · Opening the door · Lighting the lanterns |
| Tending the commons | Gathering · Weaving · Mending · Sowing · Watering · Harvesting · Composting |
| Connect | Making introductions · Finding common ground · Passing the note along · Circling back |
| Create | Sketching · Tinkering · Stitching · Kneading |
| Move | Ambling over · Wandering the commons · Carrying it across |
| Play | Noodling · Doodling · Humming along |
| Rest | Pausing · Taking a breath · Settling in |

## Changing a word

Tell the Load times chat which word to change. The pages read the words from
[events/nav/waiting-words.js](https://github.com/Creating-Works/events/blob/main/nav/waiting-words.js),
so a change is made there and on this page in the same push. This page is the readable copy; the
script is what the site shows.

Built by the Load times chat, queue row loadtimes.14.
