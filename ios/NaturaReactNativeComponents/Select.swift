//
//  Select.swift
//  Naturareactnativecomponents
//
//  Created by Davi Mattos on 02/06/22.
//  Copyright © 2022 Facebook. All rights reserved.
//

import Foundation

@objc(SelectManager)
class SelectManager: RCTViewManager {

  override func view() -> (Select) {
    return Select()
  }
}

class Select : UIView {

  @objc var placeHolder: String = "" {
    didSet {
      self.placeholder = placeHolder
    }
  }

  let data: [String] = ["Item1", "Item2"]

  let textField: UITextField = {
    let textField = UITextField()
    textField.translatesAutoresizingMaskIntoConstraints = false
    return textField
  }()

  // lazy let pickerView: UIPickerView = {
  //   let pickerView = UIPickerView()
  //   pickerView.delegate = self
  //   pickerView.dataSource = self
  //   return pickerView
  // }()

  // init() {
  //   super.init(frame: .zero)
  //   textField.inputView = pickerView
  //   self.addSubview(textField)

  //   self.widthAnchor.constraint(equalToConstant: 70).isActive = true
  //   self.heightAnchor.constraint(equalToConstant: 25).isActive = true

  //   textField.topAnchor.constraint(equalTo: self.topAnchor).isActive = true
  //   textField.leadingAnchor.constraint(equalTo: self.leadingAnchor).isActive = true
  //   textField.bottomAnchor.constraint(equalTo: self.bottomAnchor).isActive = true
  //   textField.trailingAnchor.constraint(equalTo: self.trailingAnchor).isActive = true
  // }

  // required init?(coder: NSCoder) {
  //   fatalError("init(coder:) has not been implemented")
  // }

  func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
    return data[row]
  }

  func numberOfComponents(in pickerView: UIPickerView) -> Int {
    return 1
  }

  func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
    return data.count
  }

  func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
    textField.text = data[row]
  }
}
