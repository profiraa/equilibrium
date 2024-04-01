import { Component, OnInit, TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css'],
})
export class OutcomeComponent {
  advantages = [
    {
      id: '1',
      category: 'Potential benefits',
      title: 'FOR SOCIETY: Improved access to mental health services',
      content:
        "Technology can help more people get the help they need for their feelings and thoughts, especially those who live far away from hospitals or doctors. Teletherapy is a way to talk to someone who can help with mental health using video calls or phones. This way, people don't have to go to a hospital or office, which can be difficult for some people who can't move easily or feel scared around lots of people.",
      image: 'assets/images/benefit1.jpg',
      link: 'https://www.forbes.com/sites/bernardmarr/2020/06/22/10-wonderful-examples-of-using-artificial-intelligence-ai-for-good/',
      link_text: '10 Examples of AI Benefits',
    },
    {
      id: '2',
      category: 'Potential benefits',
      title: 'FOR INDIVIDUAL: Increased patient engagement',
      content:
        'Technology can make it easier for people to stay involved in their mental health care. There are apps that give tools and information to help manage feelings and keep track of progress. They also let you talk to healthcare professionals whenever you need. These apps can give immediate help and encouragement, which can be really helpful for people going through tough times with their mental health.',
      image: 'assets/images/benefit2.jpg',
      link: 'https://www.betterhelp.com/',
      link_text: 'BetterHelp app',
    },
    {
      id: '3',
      category: 'Potential benefits',
      title: 'FOR INDIVIDUAL: Personalized treatment',
      content:
        "Technology has the exciting potential to make mental health treatments unique to each person's needs. For example, virtual reality therapy can be adjusted to help with each person's specific fears or worries, making the treatment feel more personal. Also, special computer programs can look at a person's information and find patterns in how they feel, helping doctors create treatment plans that fit each person perfectly.",
      image: 'assets/images/benefit3.jpg',
      link: 'https://replika.com/',
      link_text: 'Replika app',
    },
    {
      id: '4',
      category: 'Potential benefits',
      title: 'FOR WHOLE WORLD: Reduced stigma',
      content:
        'Technology can play a big role in making people feel less embarrassed about mental health problems. Online groups and forums, for example, provide a safe space where people can talk about their experiences without feeling judged. Also, mental health apps can be used privately, so people can take care of themselves without having to tell anyone else about their mental health.',
      image: 'assets/images/benefit4.jpg',
      link: 'https://www.talkspace.com/',
      link_text: 'Talkspace app',
    },
  ];

  disadvantages = [
    {
      id: '5',
      category: 'Potential negative consequences',
      title: 'FOR INDIVIDUAL: Lack of human interaction',
      content:
        "One big challenge with using technology for mental health is that it doesn't give the same feeling as being with another person. Even though teletherapy and mental health apps can give support and tools, they can't replace the connection you feel when you're with someone face-to-face. This might be especially hard for people who feel lonely.",
      image: 'assets/images/consequence1.jpg',
      link: 'https://www.aiplusinfo.com/blog/dangers-of-ai-loss-of-human-connection/',
      link_text: 'Read About Loss of Human Connection',
    },
    {
      id: '6',
      category: 'Potential negative consequences',
      title: 'FOR INDIVIDUAL: Privacy concerns',
      content:
        "Another concern about using technology for mental health is privacy. Some people might worry about sharing personal information online, especially if they're not sure how safe it is. Also, mental health apps might gather information about how people use them and what symptoms they have, which can make some people uneasy about who might see that information and how it could be used.",
      image: 'assets/images/consequence2.jpg',
      link: 'https://www.thedigitalspeaker.com/privacy-age-ai-risks-challenges-solutions/',
      link_text: 'Challenges of AI Regarding the Privacy Issue',
    },
    {
      id: '7',
      category: 'Potential negative consequences',
      title: 'FOR INDIVIDUAL: Limited effectiveness',
      content:
        "Though technology can help with mental health, it's important to know it's not a magic fix. Research shows that mental health apps might not work as well as talking to a therapist face-to-face, especially for serious mental health problems.",
      image: 'assets/images/consequence3.jpg',
      link: 'https://www.tandfonline.com/doi/full/10.1080/08839514.2019.1600301',
      link_text: 'Challenges of AI in Machine Driving Decisions',
    },
    {
      id: '8',
      category: 'Potential negative consequences',
      title: 'FOR SOCIETY: Possible discriminatory decisions',
      content:
        'When the information used to teach AI systems is one-sided, it can lead to unfair decisions by AI in different areas like hiring, loans, or even in the legal system. This bias can cause people from certain groups to be treated unfairly, especially those who are already at a disadvantage, making their situation even harder.',
      image: 'assets/images/consequence4.jpg',
      link: 'https://www.aclu.org/news/privacy-technology/amazons-face-recognition-falsely-matched-28#:~:text=Our%20test%20used%20Amazon%20Rekognition,(D%2DGa.).',
      link_text: 'About Less Accurate Face Recognition in Some Groups',
    },
    {
      id: '9',
      category: 'Potential negative consequences',
      title: 'FOR WHOLE WORLD: Lack of Accountability',
      content:
        "Rushing to use AI without proper checks can lead to unfair outcomes. AI tools that aren't working correctly might incorrectly refuse social security benefits or even cause wrongful arrests, especially if they're using flawed facial recognition technology.",
      image: 'assets/images/consequence5.jpg',
      link: 'https://www.aclu.org/news/privacy-technology/amazons-face-recognition-falsely-matched-28#:~:text=Our%20test%20used%20Amazon%20Rekognition,(D%2DGa.).',
      link_text: 'About Face Recognition & Consequences',
    },
  ];

  item: any;
  trackByFn!: TrackByFunction<{
    id: string;
    category: string;
    title: string;
    content: string;
    image: string;
    link: string;
    link_text: string;
  }>;

  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
