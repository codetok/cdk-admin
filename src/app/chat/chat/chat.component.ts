import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cdk-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {
	message: any;
	messages = [
				{
	contact: 'Codetok',
	profile_pic: "../assets/Images/contact.png",
	status: "Online",
	messages: [
		{
			message: 'Hi',
			date: '1 min ago',
			self: false
		},
		{
			message: 'Hi',
			date: '2 mins ago',
			self: true
		},
		{
			message: 'whats up!',
			date: '1 min ago',
			self: false
		},

	]},
	{
	contact: 'Amy',
	profile_pic: "../assets/Images/contact.png",
	status: "Online",
	messages: [
		{
			message: 'This is a text message',
			date: '1 min ago',
			self: true
		},
		{
			message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
			date: '2 mins ago',
			self: false
		},
		{
			message: 'whats up!',
			date: '1 min ago',
			self: false
		},

	]},
	{
		contact: 'Ram',
		profile_pic: "../assets/Images/contact.png",
		status: "Online",
		messages: [
			{
				message: 'Hi',
				date: '1 min ago',
				self: false
			},
			{
				message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
				date: '2 mins ago',
				self: true
			},
			{
				message: 'whats up!',
				date: '1 min ago',
				self: false
			},

		]
	},
	{
	contact: 'Codetok',
	profile_pic: "../assets/Images/contact.png",
	status: "Online",
	messages: [
		{
			message: 'Hi',
			date: '1 min ago',
			self: false
		},
		{
			message: 'Hi',
			date: '2 mins ago',
			self: true
		},
		{
			message: 'whats up!',
			date: '1 min ago',
			self: false
		},

	]},
	{
	contact: 'Amy',
	profile_pic: "../assets/Images/contact.png",
	status: "Online",
	messages: [
		{
			message: 'This is a text message',
			date: '1 min ago',
			self: false
		},
		{
			message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
			date: '2 mins ago',
			self: true
		},
		{
			message: 'whats up!',
			date: '1 min ago',
			self: false
		},

	]},
	{
		contact: 'Ram',
		profile_pic: "../assets/Images/contact.png",
		status: "Online",
		messages: [
			{
				message: 'Hi',
				date: '1 min ago',
				self: false
			},
			{
				message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
				date: '2 mins ago',
				self: true
			},
			{
				message: 'whats up!',
				date: '1 min ago',
				self: false
			},

		]
	},
	{
	contact: 'Codetok',
	profile_pic: "../assets/Images/contact.png",
	status: "Online",
	messages: [
		{
			message: 'Hi',
			date: '1 min ago',
			self: false
		},
		{
			message: 'Hi',
			date: '2 mins ago',
			self: true
		},
		{
			message: 'whats up!',
			date: '1 min ago',
			self: false
		},

	]},
	{
	contact: 'Amy',
	profile_pic: "../assets/Images/contact.png",
	status: "Online",
	messages: [
		{
			message: 'This is a text message',
			date: '1 min ago',
			self: false
		},
		{
			message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
			date: '2 mins ago',
			self: true
		},
		{
			message: 'whats up!',
			date: '1 min ago',
			self: false
		},

	]},
	{
		contact: 'Ram',
		profile_pic: "../assets/Images/contact.png",
		status: "Online",
		messages: [
			{
				message: 'Hi',
				date: '1 min ago',
				self: false
			},
			{
				message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
				date: '2 mins ago',
				self: true
			},
			{
				message: 'whats up!',
				date: '1 min ago',
				self: false
			},

		]
	}
	];
  	constructor() { }

  	ngOnInit() {
  		// this.message = this.messages[0];
  	}

}
