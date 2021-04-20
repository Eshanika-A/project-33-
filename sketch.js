const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow= [] 

function preload(){
  backgroundImg=loadImage("snow2.jpg")
}

function setup() {
  createCanvas(1500,700);
  

}

function draw() {
  background(backgroundImg); 
  
  drawSprites();
}