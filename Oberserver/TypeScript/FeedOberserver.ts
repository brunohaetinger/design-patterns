abstract class EventListener {
  update(url: string){};
}

class RSSFeedListener extends EventListener {
  update(url: string) {
    console.log('Updating RSS feed with ' + url);
  }
}

class EmailAlertsListener extends EventListener {
  update(url: string) {
    console.log('Sending email with ' + url);
  }
}

class FeedEventManager {
  private listeners: EventListener[] = [];

  subscribe(listener: EventListener){
    this.listeners.push(listener);
  }
  
  unsubscribe(listener: EventListener){
    this.listeners = this.listeners.filter(l => l !== listener);

  }

  notify(data: string){
    this.listeners.forEach(l => l.update(data));
  }
}


class NewsWebsite {
  private events: FeedEventManager;

  constructor(ev: FeedEventManager){
    this.events = ev || new FeedEventManager();
  }

  publishNews(title: string, content: string ){
    console.log(`Publishing website news with title ${title} and content as\n ${content}`);
    const generatedNewsURL = 'http://example.org/' + title.replace(' ', '_');
    this.events.notify(generatedNewsURL);
  }
}



function main() {
  const ev = new FeedEventManager();
  const rss = new RSSFeedListener();
  const email = new EmailAlertsListener();
  
  ev.subscribe(rss);
  ev.subscribe(email);

  const news = new NewsWebsite(ev);
  news.publishNews('Abc', "here is my abc content");
  news.publishNews('Abc 2', "here is my abc 2 content");
  
  ev.unsubscribe(email);
  news.publishNews('Abc 3', "here is my abc 3 content, without email");
}

main();