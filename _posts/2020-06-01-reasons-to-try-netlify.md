---
layout: post
title:  "Reasons to Try Netlify, and Why It Might Not Be For You"
date:   2020-06-01 20:33:30 -0400
author: "MyCah Pleasant"
category: "Software Development"
tags: ['Netlify', 'JavaScript', 'Jekyll']
show_author: true
---

<span class="first-letter">T</span>he market for web hosting is weird.

Just a few years ago, shared hosting for static files, PHP-based projects, or other basic web applications was popular. You could do one-click installs of WordPress, and have a blog up and running in just a few minutes.
As PHP began its decline in popularity, though, so did basic hosting. A simple Apache server with a PHP install was no longer all you needed to run an application. Instead, that Apache server is now just a reverse proxy to a Node.JS process running an Express-based application.

Shared hosting wouldn't cut it anymore - enter the rise of virtual private servers.

Cheap virtual private servers like the ones you can find on LowEndBox are great. For the most part, the servers you see in the $5 to $10 range are suitable for small web projects, non-essential deployments, and development servers. You gain a ton of freedom by using one, and their competitive price makes a no brainer for anyone with at least a little experience at a command line.

My current VPS hosts my website and several playgrounds for things I was experimenting with at one point or another.

There are a few problems with this approach, especially for a basic web app. Most importantly is the overhead. You have to worry about OS and package updates, renewing your SSL certs, and setting up security. At the application level, you also have to worry about environments, packages, and dependencies for anything you build. Containerization can help with this, but again, the overhead concerns.
What was I doing with all that overhead? Not much. The number of resources I was using was tiny compared to what I was paying. While $10 a month isn't a huge expense, when you are using less than 1% of the resources per month, it isn't money well spent. Combine that with some billing issues with your VPS provider, and you start to question if it makes sense to continue making payments for such a small amount of resources.

And, personally, it just didn't make the development process much fun to deal with - when I would go to do something, I would get bogged down in the details of the server, and wouldn't make much progress. And there's an argument to be made for having a separation of concerns. Should I be doing active development and research on the same server that is supposed to be serving the "production" version of the website? Probably not.

That's where Netlify piqued my interest. Netlify promised to simplify my Jekyll setup so my site could be hosted and automated with minimal effort. Their focus is on applications that serve static content, like a Jekyll site, and those that make heavy use of SAAS APIs, like Firebase.

The concept is called a JAM stack (JavaScript, APIs, and Markup) and isn't a new or revolutionary idea. What is supposed to be unique is the simplicity of the setup.

Now that I have extra time thanks to the pandemic lockdown, I decided to go ahead and see how easy it was to move my website to Netlify.
Setting up an application revolves around your Git repo. The build process is automatically detected and implemented based on the contents of the repo.

I didn't have to deviate from the options chosen for me until I got to the DNS settings. Even that, though, is a simple CName and nameserver change. If you're familiar with any hosting solution, you know how to do this.

Free SSL certs are issued with a click of a button thanks to Let's Encrypt. Netlify automatically renews them for you, too.
Within minutes, your site is up and running.

Now, I realize that my use case was straightforward. I didn't have any crazy requirements. I'm not sure how challenging a more advanced project would be, but I assume that as long as you have a well-defined, automated build process, you shouldn't run into any issues.

What other cool things did I gain by moving my site to Netlify?

1. Branch builds so I can preview changes before merging them into the master branch
2. Built-in A/B testing so you can send a percentage of your traffic to a different codebase
3. Forms that allow you to collect information from visitors without having to use an external service

So far, you're probably wondering why VPS providers even exist anymore.

Well, there are still plenty of instances where Netlify doesn't make sense.

If you have to host anything that has a backend component - like a database - you're out of luck. Netlify doesn't support it - this is for frontend applications only, which is why it makes for a great experience with static site generators.

An excellent example of this is incorporating comments into a blog. I have previously used Isso, a Python application that uses SQLite to store the data, to add comments to my articles. It worked well but required some more extensive set up to make sure it was running as a service and was routing correctly.

I've since removed this functionality, but if I wanted to bring it back, I would have to use a service like Disqus - which isn't very appealing - or roll a hacky solution.

You're also, obviously, giving up a ton of freedom compared to running your server. Want a more advanced routing setup with Apache or Nginx? Nope. Cron jobs? Ha. Containers? Cute.

There are going to be instances where the lack of freedom makes Netlify a lousy choice. I haven't explored a more advanced setup yet, so I can't comment on anything past a basic Jekyll install. While the team at Netlify has seemingly done an excellent job coming up with solutions to familiar patterns, you're going to have to do your due diligence to make sure giving up those freedoms makes sense.

And, lastly, there is the cost. If you start to exceed the seemingly generous free plan (300 build minutes, 100GB bandwidth a month), the prices are pretty high. You can buy more build minutes at $7 per 500, and more bandwidth at $20 per 100 gigabytes.

If I were in a position where I was exceeding the free limits, paying the overages or jumping to the next tier - which costs $45 - would be hard to justify. Even if I wanted a more enterprise solution than some no-name VPS provider, AWS or Digital Ocean are likely cheaper options - albeit with the trade-off of having to manage more of your tooling.

Does Netlify make sense for you? For most people, I bet the answer is yes. But, there are always going to be people who want more control over the process. For projects like mine, though, I haven't found a better solution.
