describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode('abcdefghijklmnopqrstuvwxyz', 33), 'hijklmnopqrstuvwxyzabcdefg');
    });
    it('debería retornar "Nsbjvzh lu zhunyl; 261&" para "Glucosa en sangre: 150%" con offset 33', () => {
      assert.equal(cipher.encode('Glucosa en sangre: 150%', 33), 'Nsbjvzh lu zhunyl; 261&');
    });
    it('debería retornar "ÑHÑH ñhñh" para "ÑAÑA ñaña", con offset 33', () => {
      assert.equal(cipher.encode('ÑAÑA ñaña', 33),'ÑHÑH ñhñh' );
          });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode('hijklmnopqrstuvwxyzabcdefg', 33), 'abcdefghijklmnopqrstuvwxyz');
    });
    it('debería retornar "Glucosa en sangre: 150%" para "Nsbjvzh lu zhunyl; 261&", con offset 33', () => {
    assert.equal(cipher.decode('Nsbjvzh lu zhunyl; 261&', 33), 'Glucosa en sangre: 150%');
  });
  it('debería retornar "ÑAÑA ñaña" para "ÑHÑH ñhñh", con offset 33', () => {
    assert.equal(cipher.decode('ÑHÑH ñhñh', 33),'ÑAÑA ñaña' );
        });
});

});