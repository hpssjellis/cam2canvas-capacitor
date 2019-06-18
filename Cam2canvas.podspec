
  Pod::Spec.new do |s|
    s.name = 'Cam2canvas'
    s.version = '0.0.1'
    s.summary = 'Live feed web camera to a canvas on the page'
    s.license = 'MIT'
    s.homepage = 'https://github.com/hpssjellis/cam2canvas-capacitor'
    s.author = 'Rocksetta'
    s.source = { :git => 'https://github.com/hpssjellis/cam2canvas-capacitor', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end