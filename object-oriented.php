<?php

/**
 * Exercício de orientação a objetos
 */
class Item {
    private $property1;
    private $property2;
    private $property3;
  
    public function __construct() {
      $this->property1 = 0;
      $this->property2 = 0;
      $this->property3 = 0;
    }
  
    public function getProperty1() {
      return $this->property1;
    }
    
    public function setProperty1($value) {
      $this->property1 = $value;
    }
  
    public function getProperty2() {
      return $this->property2;
    }
    
    public function setProperty2($value) {
      $this->property2 = $value;
    }
  
  
    public function getProperty3() {
      return $this->property3;
    }
    
    public function setProperty3($value) {
      $this->property3 = $value;
    }
  
    /**
     * Returns the product of the Item properties
     */
    public function getPropertiesProduct() {
      return $this->property1 * $this->property2 * $this->property3;
    }
  
  }
  
  $jewel = new Item;
  $jewel->setProperty1(2);
  $jewel->setProperty2(5);
  $jewel->setProperty3(10);
  
  echo $jewel->getPropertiesProduct();