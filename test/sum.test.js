'use strict'

var expect = require('chai').expect
var sum = require('../src/sum')

describe('# SUM', function () {
  // (descrevendo seu teste, função de callback a ser executada quando o teste for executado)
  it('Should SUM module to be a function', function () {
    expect(sum).to.be.a('function')
    // Verificar se esse teste é verdadeiro ou falso
  }) // "espero que o sum seja uma função"

  // construindo outros testes - BDD red
  it('Should SUM return 10 when I pass 1 and 9', function () {
    expect(sum(1, 9)).to.be.equal(10)
  }) // "Quando passar 1 e 9 o SUM deve retornar 10"

  it('Should SUM return 5 when I pass 2 and 3', function () {
    expect(sum(2, 3)).to.be.equal(5)
  })

  it('Should SUM return an error if receive just one parametr', function () {
    expect(sum(1)).to.be.an('error')
  }) // deve retornar um erro se só for passado um parametro

  it('Should SUM return an error if the parameter has not a number', function () {
    expect(sum('a', 'b')).to.be.an('error')
  }) // retornar um erro se o parametro não for um numero

  // construindo outros testes - Formato TDD
  it('Assert', function () {
    var assert = require('assert')
    // (executar a função, resultado - aquilo que voce espera, mensagem)
    assert.equal(sum(20, 30), 50, 'Message') // Passou! 20 + 30 = 50
  })
})
