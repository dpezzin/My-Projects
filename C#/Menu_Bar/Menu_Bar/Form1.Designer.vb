<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form1
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.MenuStrip1 = New System.Windows.Forms.MenuStrip()
        Me.FileToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.mnuNew = New System.Windows.Forms.ToolStripMenuItem()
        Me.OpenToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.mnuSave = New System.Windows.Forms.ToolStripMenuItem()
        Me.mnuQuit = New System.Windows.Forms.ToolStripMenuItem()
        Me.ViewProjectToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.ViewFilesToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.EditToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.mnuUndo = New System.Windows.Forms.ToolStripMenuItem()
        Me.mnuCut = New System.Windows.Forms.ToolStripMenuItem()
        Me.mnuCopy = New System.Windows.Forms.ToolStripMenuItem()
        Me.mnuPaste = New System.Windows.Forms.ToolStripMenuItem()
        Me.ViewToolStripMenuItem = New System.Windows.Forms.ToolStripMenuItem()
        Me.mnuViewTextBoxes = New System.Windows.Forms.ToolStripMenuItem()
        Me.mnuViewLabels = New System.Windows.Forms.ToolStripMenuItem()
        Me.mnuViewImages = New System.Windows.Forms.ToolStripMenuItem()
        Me.TextBox1 = New System.Windows.Forms.TextBox()
        Me.TextBox2 = New System.Windows.Forms.TextBox()
        Me.MenuStrip1.SuspendLayout()
        Me.SuspendLayout()
        '
        'MenuStrip1
        '
        Me.MenuStrip1.Items.AddRange(New System.Windows.Forms.ToolStripItem() {Me.FileToolStripMenuItem, Me.EditToolStripMenuItem, Me.ViewToolStripMenuItem})
        Me.MenuStrip1.Location = New System.Drawing.Point(0, 0)
        Me.MenuStrip1.Name = "MenuStrip1"
        Me.MenuStrip1.Size = New System.Drawing.Size(282, 28)
        Me.MenuStrip1.TabIndex = 0
        Me.MenuStrip1.Text = "MenuStrip1"
        '
        'FileToolStripMenuItem
        '
        Me.FileToolStripMenuItem.DropDownItems.AddRange(New System.Windows.Forms.ToolStripItem() {Me.mnuNew, Me.OpenToolStripMenuItem, Me.mnuSave, Me.mnuQuit})
        Me.FileToolStripMenuItem.Name = "FileToolStripMenuItem"
        Me.FileToolStripMenuItem.Size = New System.Drawing.Size(44, 24)
        Me.FileToolStripMenuItem.Text = "&File"
        '
        'mnuNew
        '
        Me.mnuNew.DropDownItems.AddRange(New System.Windows.Forms.ToolStripItem() {Me.ViewProjectToolStripMenuItem, Me.ViewFilesToolStripMenuItem})
        Me.mnuNew.Name = "mnuNew"
        Me.mnuNew.ShortcutKeys = CType((System.Windows.Forms.Keys.Control Or System.Windows.Forms.Keys.N), System.Windows.Forms.Keys)
        Me.mnuNew.Size = New System.Drawing.Size(199, 24)
        Me.mnuNew.Text = "New"
        '
        'OpenToolStripMenuItem
        '
        Me.OpenToolStripMenuItem.Name = "OpenToolStripMenuItem"
        Me.OpenToolStripMenuItem.ShortcutKeys = CType((System.Windows.Forms.Keys.Control Or System.Windows.Forms.Keys.O), System.Windows.Forms.Keys)
        Me.OpenToolStripMenuItem.Size = New System.Drawing.Size(199, 24)
        Me.OpenToolStripMenuItem.Text = "Open"
        '
        'mnuSave
        '
        Me.mnuSave.Name = "mnuSave"
        Me.mnuSave.ShortcutKeys = CType((System.Windows.Forms.Keys.Control Or System.Windows.Forms.Keys.S), System.Windows.Forms.Keys)
        Me.mnuSave.Size = New System.Drawing.Size(199, 24)
        Me.mnuSave.Text = "Save"
        '
        'mnuQuit
        '
        Me.mnuQuit.Name = "mnuQuit"
        Me.mnuQuit.ShortcutKeys = CType(((System.Windows.Forms.Keys.Control Or System.Windows.Forms.Keys.Shift) _
                    Or System.Windows.Forms.Keys.Q), System.Windows.Forms.Keys)
        Me.mnuQuit.Size = New System.Drawing.Size(199, 24)
        Me.mnuQuit.Text = "Quit"
        '
        'ViewProjectToolStripMenuItem
        '
        Me.ViewProjectToolStripMenuItem.Name = "ViewProjectToolStripMenuItem"
        Me.ViewProjectToolStripMenuItem.Size = New System.Drawing.Size(158, 24)
        Me.ViewProjectToolStripMenuItem.Text = "New Project"
        '
        'ViewFilesToolStripMenuItem
        '
        Me.ViewFilesToolStripMenuItem.Name = "ViewFilesToolStripMenuItem"
        Me.ViewFilesToolStripMenuItem.Size = New System.Drawing.Size(158, 24)
        Me.ViewFilesToolStripMenuItem.Text = "New File"
        '
        'EditToolStripMenuItem
        '
        Me.EditToolStripMenuItem.DropDownItems.AddRange(New System.Windows.Forms.ToolStripItem() {Me.mnuUndo, Me.mnuCut, Me.mnuCopy, Me.mnuPaste})
        Me.EditToolStripMenuItem.Name = "EditToolStripMenuItem"
        Me.EditToolStripMenuItem.Size = New System.Drawing.Size(47, 24)
        Me.EditToolStripMenuItem.Text = "&Edit"
        '
        'mnuUndo
        '
        Me.mnuUndo.Name = "mnuUndo"
        Me.mnuUndo.ShortcutKeys = CType((System.Windows.Forms.Keys.Control Or System.Windows.Forms.Keys.Z), System.Windows.Forms.Keys)
        Me.mnuUndo.Size = New System.Drawing.Size(165, 24)
        Me.mnuUndo.Text = "Undo"
        '
        'mnuCut
        '
        Me.mnuCut.Name = "mnuCut"
        Me.mnuCut.ShortcutKeys = CType((System.Windows.Forms.Keys.Control Or System.Windows.Forms.Keys.X), System.Windows.Forms.Keys)
        Me.mnuCut.Size = New System.Drawing.Size(165, 24)
        Me.mnuCut.Text = "Cut"
        '
        'mnuCopy
        '
        Me.mnuCopy.Name = "mnuCopy"
        Me.mnuCopy.ShortcutKeys = CType((System.Windows.Forms.Keys.Control Or System.Windows.Forms.Keys.C), System.Windows.Forms.Keys)
        Me.mnuCopy.Size = New System.Drawing.Size(165, 24)
        Me.mnuCopy.Text = "Copy"
        '
        'mnuPaste
        '
        Me.mnuPaste.Name = "mnuPaste"
        Me.mnuPaste.ShortcutKeys = CType((System.Windows.Forms.Keys.Control Or System.Windows.Forms.Keys.V), System.Windows.Forms.Keys)
        Me.mnuPaste.Size = New System.Drawing.Size(165, 24)
        Me.mnuPaste.Text = "Paste"
        '
        'ViewToolStripMenuItem
        '
        Me.ViewToolStripMenuItem.DropDownItems.AddRange(New System.Windows.Forms.ToolStripItem() {Me.mnuViewTextBoxes, Me.mnuViewLabels, Me.mnuViewImages})
        Me.ViewToolStripMenuItem.Name = "ViewToolStripMenuItem"
        Me.ViewToolStripMenuItem.Size = New System.Drawing.Size(53, 24)
        Me.ViewToolStripMenuItem.Text = "&View"
        '
        'mnuViewTextBoxes
        '
        Me.mnuViewTextBoxes.Name = "mnuViewTextBoxes"
        Me.mnuViewTextBoxes.ShortcutKeys = CType(((System.Windows.Forms.Keys.Control Or System.Windows.Forms.Keys.Shift) _
                    Or System.Windows.Forms.Keys.T), System.Windows.Forms.Keys)
        Me.mnuViewTextBoxes.Size = New System.Drawing.Size(275, 24)
        Me.mnuViewTextBoxes.Text = "View Text Boxes"
        '
        'mnuViewLabels
        '
        Me.mnuViewLabels.Name = "mnuViewLabels"
        Me.mnuViewLabels.ShortcutKeys = CType(((System.Windows.Forms.Keys.Control Or System.Windows.Forms.Keys.Shift) _
                    Or System.Windows.Forms.Keys.L), System.Windows.Forms.Keys)
        Me.mnuViewLabels.Size = New System.Drawing.Size(275, 24)
        Me.mnuViewLabels.Text = "View Labels"
        '
        'mnuViewImages
        '
        Me.mnuViewImages.Name = "mnuViewImages"
        Me.mnuViewImages.ShortcutKeys = CType(((System.Windows.Forms.Keys.Control Or System.Windows.Forms.Keys.Shift) _
                    Or System.Windows.Forms.Keys.I), System.Windows.Forms.Keys)
        Me.mnuViewImages.Size = New System.Drawing.Size(275, 24)
        Me.mnuViewImages.Text = "View Images"
        '
        'TextBox1
        '
        Me.TextBox1.Location = New System.Drawing.Point(30, 80)
        Me.TextBox1.Multiline = True
        Me.TextBox1.Name = "TextBox1"
        Me.TextBox1.Size = New System.Drawing.Size(100, 100)
        Me.TextBox1.TabIndex = 1
        Me.TextBox1.Text = "This is the text for textbox 1"
        '
        'TextBox2
        '
        Me.TextBox2.Location = New System.Drawing.Point(161, 80)
        Me.TextBox2.Multiline = True
        Me.TextBox2.Name = "TextBox2"
        Me.TextBox2.Size = New System.Drawing.Size(100, 100)
        Me.TextBox2.TabIndex = 2
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(8.0!, 16.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(282, 255)
        Me.Controls.Add(Me.TextBox2)
        Me.Controls.Add(Me.TextBox1)
        Me.Controls.Add(Me.MenuStrip1)
        Me.MainMenuStrip = Me.MenuStrip1
        Me.Name = "Form1"
        Me.Text = "Form1"
        Me.MenuStrip1.ResumeLayout(False)
        Me.MenuStrip1.PerformLayout()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub
    Friend WithEvents MenuStrip1 As System.Windows.Forms.MenuStrip
    Friend WithEvents FileToolStripMenuItem As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents mnuNew As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents OpenToolStripMenuItem As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents mnuSave As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents mnuQuit As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents ViewProjectToolStripMenuItem As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents ViewFilesToolStripMenuItem As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents EditToolStripMenuItem As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents mnuUndo As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents mnuCut As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents mnuCopy As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents mnuPaste As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents ViewToolStripMenuItem As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents mnuViewTextBoxes As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents mnuViewLabels As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents mnuViewImages As System.Windows.Forms.ToolStripMenuItem
    Friend WithEvents TextBox1 As System.Windows.Forms.TextBox
    Friend WithEvents TextBox2 As System.Windows.Forms.TextBox

End Class
